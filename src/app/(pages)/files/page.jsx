import "./Style.Page.css";
export default function page() {
  return (
    <>
      <h1 class="p-relative pl-10 ">Files</h1>
      <div class="files-page d-flex m-20 gap-20">
        <div class="files-stats p-20 bg-white rad-10">
          <h2 class="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-file-pdf fa-lg blue center-flex c-blue icon"></i>
            <div class="info">
              <span>PDF Files</span>
              <span class="c-grey d-block mt-5">130</span>
            </div>
            <div class="size c-grey">6.5GB</div>
          </div>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-images fa-lg green center-flex c-green icon"></i>
            <div class="info">
              <span>Images</span>
              <span class="c-grey d-block mt-5">115 Files</span>
            </div>
            <div class="size c-grey">3.5GB</div>
          </div>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-file-word fa-lg red center-flex c-red icon"></i>
            <div class="info">
              <span>Word Files</span>
              <span class="c-grey d-block mt-5">110 Files</span>
            </div>
            <div class="size c-grey">3.2GB</div>
          </div>
          <div class="d-flex align-center border-eee p-10 rad-6 fs-13">
            <i class="fa-solid fa-file-csv fa-lg orange center-flex c-orange icon"></i>
            <div class="info">
              <span>CSV Files</span>
              <span class="c-grey d-block mt-5">99 Files</span>
            </div>
            <div class="size c-grey">2.9GB</div>
          </div>
          <a class="upload bg-blue c-white fs-13 rad-6 d-block w-fit" href="#">
            <i class="fa-solid fa-angles-up mr-10"></i>
            Upload
          </a>
        </div>
        <div class="files-content d-grid gap-20">
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="pdf.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Elzero</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>20/06/2020</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="avi.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="eps.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps</div>
            <p class="c-grey fs-13">Uploader</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.7MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="psd.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">Osama</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>15.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="dll.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.dll</div>
            <p class="c-grey fs-13">Coder</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.2MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="png.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Designer</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="dll.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.dll</div>
            <p class="c-grey fs-13">Coder</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.2MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="png.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Designer</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="psd.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">Osama</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>15.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="pdf.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Elzero</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="avi.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="eps.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps</div>
            <p class="c-grey fs-13">Uploader</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.7MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="pdf.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Elzero</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="avi.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="eps.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps</div>
            <p class="c-grey fs-13">Uploader</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.7MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="psd.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">Osama</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>15.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="dll.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.dll</div>
            <p class="c-grey fs-13">Coder</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.2MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="png.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Designer</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="dll.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.dll</div>
            <p class="c-grey fs-13">Coder</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.2MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="png.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Designer</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="psd.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">Osama</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>15.1MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="pdf.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Elzero</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>5.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="avi.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>12.5MB</span>
            </div>
          </div>
          <div class="file bg-white p-10 rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img decoding="async" class="mt-15 mb-15" src="eps.svg" alt="" />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps</div>
            <p class="c-grey fs-13">Uploader</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/5/2021</span>
              <span>2.7MB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
