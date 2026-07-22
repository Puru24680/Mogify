import { UploadCloud } from "lucide-react";

function UploadBox() {
  return (
    <div className="border-2 border-dashed border-indigo-300 rounded-3xl p-16 text-center bg-white hover:border-indigo-600 transition">

      <UploadCloud
        size={60}
        className="mx-auto text-indigo-600"
      />

      <h2 className="text-3xl font-bold mt-6">

        Upload Your Photo

      </h2>

      <p className="text-gray-600 mt-3">

        JPG, PNG up to 10MB

      </p>

      <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl mt-8">

        Choose Image

      </button>

    </div>
  );
}

export default UploadBox;