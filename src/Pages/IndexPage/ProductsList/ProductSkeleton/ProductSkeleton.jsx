import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
  <ContentLoader style={{margin: '40px'}}
    speed={2}
    width={220}
    height={460}
    viewBox="0 0 220 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="110" cy="123" r="110" /> 
    <rect x="0" y="257" rx="10" ry="10" width="220" height="27" /> 
    <rect x="0" y="301" rx="10" ry="10" width="220" height="52" /> 
    <rect x="0" y="371" rx="10" ry="10" width="95" height="33" /> 
    <rect x="132" y="370" rx="10" ry="10" width="85" height="31" />
  </ContentLoader>
)

export default React.memo(ProductSkeleton);