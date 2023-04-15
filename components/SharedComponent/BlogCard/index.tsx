import Wrapper from "../Styles/BlogStyles.js";
const BlogCard = ({ item }: any) => {
  return (
    <Wrapper>
      <div className="blog-card">
        <div className="sec-overlay">
          <div className="sec-layer">
            <a target="_blank" href={item?.link}>
              <div className="img-container">{item?.img}</div>
              <h3>{item?.title} </h3>

              <div className="div">
                <p>{item?.date}</p>
                {/* <p> <a target='_blank' href={item?.link}>Read more</a> <Image src={arrowRight} alt='Panther Protocol' /></p> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogCard;
