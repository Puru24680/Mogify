import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import AnalysisCard from "../components/AnalysisCard";
import ImagePreview from "../components/ImagePreview";
import LoadingSpinner from "../components/LoadingSpinner";
import ProgressBar from "../components/ProgressBar";
import RecommendationCard from "../components/RecommendationCard";
import ScoreCard from "../components/ScoreCard";
import UploadBox from "../components/UploadBox";
import UploadCard from "../components/UploadCard";
import WorkspaceLayout from "../components/WorkspaceLayout";
import useLocalStorage from "../hooks/useLocalStorage";
import { analyzeAppearance } from "../services/analysis";
import { dashboardRecentSeeds, metricsTemplate, profileDefaults } from "../utils/content";
import { buttonHover, fadeUp, staggerContainer, staggerItem, viewportOnce } from "../utils/motion";

export default function Analysis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useLocalStorage("mogify-history", dashboardRecentSeeds);
  const [user] = useLocalStorage("mogify-user", profileDefaults);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl("");
      return undefined;
    }

    const nextUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(nextUrl);

    return () => URL.revokeObjectURL(nextUrl);
  }, [selectedFile]);

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError("Select an image before running analysis.");
      return;
    }

    setError("");
    setIsAnalyzing(true);

    try {
      const result = await analyzeAppearance(selectedFile);
      setAnalysis(result);
      setHistory((current) => [result, ...current.filter((record) => record.id !== result.id)].slice(0, 10));
    } catch {
      setError("Analysis could not be completed. Please try another image.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl("");
    setAnalysis(null);
    setError("");
  };

  const topAction = (
    <motion.button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      whileHover={buttonHover}
      whileTap={{ scale: 0.98 }}
      onClick={() => void handleAnalyze()}
      disabled={!selectedFile || isAnalyzing}
    >
      <Sparkles className="h-4 w-4" />
      Analyze image
    </motion.button>
  );

  const metricItems = analysis
    ? metricsTemplate.map((metric, index) => ({
        ...metric,
        value: analysis.metrics[metric.key],
        tone: index % 4 === 0 ? "indigo" : index % 4 === 1 ? "emerald" : index % 4 === 2 ? "amber" : "violet",
      }))
    : [];

  return (
    <WorkspaceLayout
      title="Analysis"
      description="Upload a portrait and turn it into a structured appearance coaching report."
      user={user}
      actions={topAction}
    >
      <div className="space-y-6">
        <motion.div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
          <UploadCard title="Upload image" description="Drag and drop or select a portrait that clearly shows your face.">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <UploadBox onFileSelect={setSelectedFile} isLoading={isAnalyzing} />
              <ImagePreview file={selectedFile} previewUrl={previewUrl} onRemove={handleReset} />
            </div>
          </UploadCard>

          <div className="space-y-6">
            {isAnalyzing ? (
              <LoadingSpinner label="Analyzing appearance" />
            ) : analysis ? (
              <ScoreCard
                title="Overall appearance score"
                score={analysis.overallScore}
                description={analysis.summary}
              />
            ) : (
              <div className="surface-card flex min-h-[18rem] flex-col items-center justify-center rounded-[28px] p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">Your report will appear here</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Choose an image and run analysis to get a polished breakdown of symmetry, grooming potential, hairstyle direction, skincare, and wardrobe guidance.
                </p>
              </div>
            )}

            {error ? <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p> : null}
          </div>
        </motion.div>

        {analysis ? (
          <>
            <section>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Feature breakdown</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Detailed appearance metrics</h2>
                </div>
              </div>

              <motion.div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" variants={staggerContainer} initial="hidden" animate="visible" viewport={viewportOnce}>
                {metricItems.map((metric) => (
                  <motion.div key={metric.key} variants={staggerItem}>
                    <AnalysisCard
                      title={metric.label}
                      score={metric.value}
                      description={`Assessment for ${metric.label.toLowerCase()} based on the selected image.`}
                      tone={metric.tone}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <motion.div className="surface-card rounded-[28px] p-6" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Secondary signals</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Readiness indicators</h2>

                <div className="mt-6 space-y-4">
                  <ProgressBar label="Posture" value={analysis.secondaryMetrics?.posture ?? 88} />
                  <ProgressBar label="Grooming" value={analysis.secondaryMetrics?.grooming ?? 90} tone="emerald" />
                </div>
              </motion.div>

              <motion.div className="surface-card rounded-[28px] p-6" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.55 }}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Analysis notes</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">What the report emphasizes</h2>

                <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-600">
                  <p>The highest-value coaching opportunities come from grooming polish, silhouette control, and consistent skincare habits.</p>
                  <p>Mogify keeps recommendations practical so you can use them as a weekly improvement system rather than one-off feedback.</p>
                </div>
              </motion.div>
            </section>

            <section>
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Recommendations</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Actionable guidance by category</h2>
              </div>

              <motion.div className="grid gap-5 xl:grid-cols-2" variants={staggerContainer} initial="hidden" animate="visible" viewport={viewportOnce}>
                <motion.div variants={staggerItem}>
                  <RecommendationCard
                    title={analysis.hairstyle.title}
                    description={analysis.hairstyle.description}
                    items={analysis.hairstyle.items}
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <RecommendationCard
                    title={analysis.beard.title}
                    description={analysis.beard.description}
                    items={analysis.beard.items}
                    tone="emerald"
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <RecommendationCard
                    title={analysis.fashion.title}
                    description={analysis.fashion.description}
                    items={analysis.fashion.items}
                    tone="amber"
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <RecommendationCard
                    title={analysis.skincare.title}
                    description={analysis.skincare.description}
                    items={analysis.skincare.items}
                    tone="violet"
                  />
                </motion.div>
              </motion.div>
            </section>
          </>
        ) : null}
      </div>
    </WorkspaceLayout>
  );
}