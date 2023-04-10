import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import API_BASE_URL from "../../BaseUrl/config";

const PostingProducts = () => {

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [image, setImage] = useState(null);
  const [galleryImage, setGalleryImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("email", email);
    formData.append("price", price);
    formData.append("ratings", ratings);
    formData.append("image", image);
    for (const image of galleryImage) {
      formData.append("gallery_image", image);
    }

    try {
      axios.post(`${API_BASE_URL}/product/post-product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Propert Has Been Added To Your List");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleGalleryImageChange = (e) => {
    setGalleryImage(e.target.files);
  };

  return (
    <div>

      <>
        <Header />

        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div>
              <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
               
                value={price}
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
          
              <input
                type="text"
                value={ratings}
                placeholder="ratings"
                onChange={(e) => setRatings(e.target.value)}
              />

              <div>
                <label className="my-2">Featured Image:</label>
                <br />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <div>
                <label className="my-2">Gallery Images:</label>
                <br />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryImageChange}
                />
              </div>
              <div className="d-block w-25 mt-3">
                <button  type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>

        <Footer />
      </>
    </div>
  );
};

export default PostingProducts;
