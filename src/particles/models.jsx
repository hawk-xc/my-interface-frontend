import { useState } from "react";
import tiktokImg from "../assets/images/tiktok.png";
import instagramImg from "../assets/images/instagram.jpeg";
import youtubeImg from "../assets/images/youtube.png";
import googlemapsImg from "../assets/images/googlemaps.png";
import axiosClient from "../api/axiosClient";

export const CreateSentimentModal = (props) => {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");

  const handleSocialMediaChange = (event) => {
    setSelectedSocialMedia(event.target.value);
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Let's Create Sentiment!🩷</h3>
        <div role="alert" className="my-3 shadow-lg alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-info shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="py-2">
              Press ESC key or click the button below to close
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-3 px-2 my-5">
          <div className="flex flex-row gap-4">
            {/* TikTok Option */}
            <label
              className={`flex flex-col items-center w-24 align-middle justify-center transition-all rounded-lg cursor-pointer h-24 ${
                selectedSocialMedia === "tiktok"
                  ? "bg-sky-200 border-blue-500"
                  : "bg-gray-100 border-gray-300 hover:bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="socialMedia"
                value="tiktok"
                className="hidden peer"
                onChange={handleSocialMediaChange}
              />
              <img src={tiktokImg} alt="TikTok" className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium">TikTok</span>
            </label>

            {/* Instagram Option */}
            <label
              className={`flex flex-col items-center w-24 align-middle justify-center transition-all rounded-lg cursor-pointer h-24 ${
                selectedSocialMedia === "instagram"
                  ? "bg-sky-200 border-pink-500"
                  : "bg-gray-100 border-gray-300 hover:bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="socialMedia"
                value="instagram"
                className="hidden peer"
                onChange={handleSocialMediaChange}
              />
              <img
                src={instagramImg}
                alt="Instagram"
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm font-medium">Instagram</span>
            </label>

            {/* YouTube Option */}
            <label
              className={`flex flex-col items-center w-24 align-middle justify-center transition-all rounded-lg cursor-pointer h-24 ${
                selectedSocialMedia === "youtube"
                  ? "bg-sky-200 border-red-500"
                  : "bg-gray-100 border-gray-300 hover:bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="socialMedia"
                value="youtube"
                className="hidden peer"
                onChange={handleSocialMediaChange}
              />
              <img src={youtubeImg} alt="YouTube" className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium">YouTube</span>
            </label>

            {/* Googlemaps Option */}
            <label
              className={`flex flex-col items-center w-24 align-middle justify-center transition-all rounded-lg cursor-pointer h-24 ${
                selectedSocialMedia === "googlemaps"
                  ? "bg-sky-200 border-red-500"
                  : "bg-gray-100 border-gray-300 hover:bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="socialMedia"
                value="googlemaps"
                className="hidden peer"
                onChange={handleSocialMediaChange}
              />
              <img
                src={googlemapsImg}
                alt="GoogleMaps"
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm font-medium">Google Maps</span>
            </label>
          </div>

          <div className="flex flex-col gap-1">
            Sentiment Title
            <label className="flex items-center gap-2 input input-bordered">
              〰️
              <input type="text" className="grow" placeholder="Title" />
            </label>
          </div>
          <div className="flex flex-col gap-1">
            Sentiment Link
            <label className="flex items-center gap-2 input input-bordered">
              🔗
              <input type="text" className="grow" placeholder="Link" required />
            </label>
          </div>
          <div className="flex flex-col gap-1">
            Total Comments
            <label className="flex items-center gap-2 input input-bordered">
              #️⃣
              <input
                type="number"
                className="grow"
                placeholder="Total Comments"
                defaultValue={5}
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            Tags
            <div className="flex flex-row flex-wrap gap-2 p-3 rounded-lg bg-slate-50">
              {props.tags.map((item, index) => {
                return (
                  <label
                    className="flex items-center text-sm font-medium transition-colors rounded-full cursor-pointer"
                    key={index}
                  >
                    <input type="checkbox" className="hidden peer" />
                    <span className="px-3 py-1 border rounded-full peer-checked:bg-sky-200 peer-checked:text-black bg-slate-200 hover:bg-slate-300 peer-checked:border-slate-500">
                      🏷️{item.tag_name}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export const CreateTagModal = (props) => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Let's Create Tag!🩷</h3>
        <div role="alert" className="my-3 shadow-lg alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-info shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="py-2">
              Press ESC key or click the button below to close
            </p>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export const DeleteSentimentModal = (props) => {
  const deleteSentiment = async () => {
    try {
      const response = await axiosClient.delete(
        `/sentiment/${props.sentimentId}`
      );

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to delete sentiment:", error);
    }
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Delete Sentiment?</h3>
        <div role="alert" className="my-3 shadow-lg alert ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-info shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="py-2">
              Are you sure you want to delete this sentiment? this action cannot
              be undone
            </p>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex flex-row gap-2">
            <button className="btn btn-error" onClick={deleteSentiment}>
              Yes, Delete this sentiment
            </button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
