import banner from '../../../img/banner.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img className="img-fluid" src={banner} alt="Banner" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  )
}

export default Banner
