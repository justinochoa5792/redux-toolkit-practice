import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";
import { getMorePhotos } from "./galleryState";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const morephotos = useSelector((state) => state.morePhotos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const getMorePhotosBtn = () => {
    dispatch(getMorePhotos());
  };

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>This is a photo gallery made using redux toolkit</p>
      <hr />
      <div className="gallery">
        {photos.map((photo) => {
          return (
            <img
              key={photo.id}
              alt={photo.author}
              src={photo.download_url}
              width="400"
              height="400"
            />
          );
        })}
        {morephotos
          ? morephotos.map((item) => {
              return (
                <img
                  key={item.id}
                  alt={item.author}
                  src={item.download_url}
                  width="400"
                  height="400"
                />
              );
            })
          : ""}
      </div>
      <button onClick={getMorePhotosBtn}>View More</button>
    </div>
  );
}

export default App;
