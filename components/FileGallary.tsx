import { Asset } from "@/app/types/graph";

export const FileGallery = ({ files }: {files: Asset[]}) => {
    if(!files?.length) return null
    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Bestanden</h3>
          {files?.map((file: Asset) => (
  
          <div className="mt-5" key={file.fileName}>
            <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 sm:mt-0">
                  <div className="text-sm font-medium text-gray-900">{file.fileName}</div>
                  <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                    <div>{Math.round(file.size ? file.size / 100000 : 0) /10} MB</div>
                    <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                      &middot;
                    </span>
                    <div className="mt-1 sm:mt-0">Laatst aangepast op {new Date(file.updatedAt).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                <a
                  type="button"
                  href={file.url}
                  target="_blank"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  };