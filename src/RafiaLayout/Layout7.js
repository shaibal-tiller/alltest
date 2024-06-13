import React from "react";
// import { project_list_Data } from "../../utils/ProjectInfos";

// import Banner from "../Banner";
// import ProjectList from "../ProjectList";
// import { renderInfoDetail } from "../../utils/RenderInfoDetail.js";

const Layout_7 = ({ pageNum }) => {
    const project_list_Data=[]
    const renderInfoDetail =[]
  const projectData = project_list_Data?.find((data) => data.id === pageNum) ;


  const getGridClass = (index) => {
    switch (index) {
      case 0:
        return "col-span-4";
      case 1:
        return "col-span-2 row-span-2";
      case 2:
      case 3:
        return "col-span-2 row-span-1";
   
      default:
        return "col-span-4";
    }
  };
  
  const calculateDynamicHeight = (index) => {
    const baseHeight = 25; 
    if (index === 2 || index === 3) {
      return `h-[${baseHeight}rem]`;
    }
   return index % 2 === 0 ? `h-[${baseHeight}rem]` : "h-full";
  };
  

  return (
    <div className="">
      {/* ---------------------------- Banner ----------------------------- */}
      <section>
        {/* <Banner pageNum={7}></Banner> */}
      </section>



      <section className="px-[32rem]">
        {/* ---------------------------- summary ----------------------------- */}
        <section className="flex flex-col mt-[-5rem] relative bg-black px-24 z-10 border-l border-light-green shadow-2xl">
          <section className="w-full ">
            <div className="flex justify-between mt-5 mb-3">
              <div className="text-gray">
                <small>Project</small>
              </div>
          {/*     <div className="flex gap-4">
                <small className="text-gray">Share</small>
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faFacebookF} />
              </div> */}
            </div>

            <strong className="text-3xl">
              Preparation of Chattogram Metropolitan Master Plan (Period:
              2020-2041)
            </strong>

         

            <p className="text-justify text-sm my-3">{projectData.description}</p>

            <div>
              <div>
                <p className="font-bold text-2xl">Overview</p>
                <p>coming soon ....</p>
              </div>
              <div className="my-3">
                <p className="font-bold text-2xl">Features</p>
                <p>coming soon ....</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4 mt-4 mb-16 ">
              {projectData.projectInfos.map(({category,info}, index) => {
                return (
                  <div key={index}>
                    <strong>{category}</strong>
                    <br />
                    <small
                      className={
                        index % 2 === 0
                          ? "flex justify-start"
                          : "whitespace-pre-line"
                      }
                    >
                      {renderInfoDetail(info)}
                    </small>
                  </div>
                );
              })}
            </div>
          </section>
        </section>



        {/* ---------------------------- Project_Photos_Details ----------------------------- */}
        <section className="py-16">
          <div className="grid grid-cols-4 gap-4 relative">
            {projectData.photos.map((img_info, index) => {
              return (
                <div className={getGridClass(index)} key={index}>
                  <div className={`w-full ${calculateDynamicHeight(index)}`}>
                    <img src={img_info.img} alt="" className="h-full w-full object-cover" />
                  </div>

                  <blockquote className="hidden">
                    {img_info.img_desc}
                  </blockquote>
                </div>
              );
            })}
          </div>
        </section>


        {/* ---------------------------- Project_List ----------------------------- */}
        <section>
          {/* <ProjectList pageNum={7}></ProjectList> */}
        </section>
      </section>



    </div>
  );
};

export default Layout_7;
