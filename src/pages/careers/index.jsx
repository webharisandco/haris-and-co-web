import React from "react";
import Banner from "./Banner";
import JobCard from "./JobCard";
import WhyWork from "./WhyWork";
import WorldClock from "../../components/ui/HomePage/TimeSection";

export default function Careers() {
  return (
    <div>
      <Banner />
      <WhyWork />
      <div className="bg-black  px-[16px] n md:px-[80px] py-[55px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 xl:gap-6">
        <JobCard jobName={"Graphic Designer"} />
        <JobCard jobName={"Video Editor"} />
        <JobCard jobName={"Cinematographer"} />
        <JobCard jobName={"Cinematographer"} />
        <JobCard jobName={"Performance Marketing Executive"} />
        <JobCard jobName={"Project Coordinator"} />
        <JobCard jobName={"Project Coordinator"} />
        <JobCard jobName={"SEO Content Writer"} />
        <JobCard jobName={"SEO Content Writer"} />
        <JobCard jobName={"SEO Content Writer"} />
        <JobCard jobName={"Social Media Content Writer"} />
        <JobCard jobName={"Social Media Content Writer"} />
        <JobCard jobName={"Sales Trainer"} />
        <JobCard jobName={"Appointment Setter"} />
        <JobCard jobName={"Business Development Representatives"} />
        <JobCard jobName={"Web Developer"} />
        <JobCard jobName={"HR Executive"} />
        <JobCard jobName={"Marketing Head"} />
        <JobCard jobName={"Receptionist"} />
        <JobCard jobName={"Creative Director"} />
      </div>
      <WorldClock />
    </div>
  );
}
