import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { nftData } from "../components/home/HotCollections"; 
import AuthorItems from "../components/author/AuthorItems";
import AuthorBanner from "../images/author_banner.jpg";

const Author = () => {
  const { id } = useParams(); // from /author/:id
  const authorId = Number(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // find author info from nftData (could be owner or creator)
  const nft = nftData.find(
    (item) => item.ownerId === authorId || item.creatorId === authorId
  );

  if (!nft) {
    return (
      <div className="container">
        <h2>Author not found</h2>
      </div>
    );
  }

  // pick the right data (if authorId matches owner, show owner info, else show creator info)
  const isOwner = nft.ownerId === authorId;
  const authorName = isOwner ? nft.ownerName : nft.creatorName;
  const authorImage = isOwner ? nft.ownerImage : nft.creatorImage;
  const username = `@${authorName.toLowerCase().replace(/\s+/g, "")}`;
  const wallet = "UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7"; // you can replace with real

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Banner */}
        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authorImage} alt={authorName} />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authorName}
                          <span className="profile_username">{username}</span>
                          <span id="wallet" className="profile_wallet">
                            {wallet}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">573 followers</div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author NFTs */}
              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems authorId={authorId} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;

