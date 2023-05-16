const About = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold">About</h2>
      <p className="text-xl mx-auto min-w-xl max-w-4xl">
        Ever wanted to know how much your teacher makes? Well, now you can! This
        website allows you to search for teachers in British Columbia and see
        how much they make. The data comes from financial statements published
        by universities and school districts.
      </p>
      <h2 className="text-3xl font-bold pt-5">I couldn’t find my teacher!</h2>
      <p className="text-xl mx-auto min-w-xl max-w-4xl">
        The BC Financial Information Act only requires that employees that make
        more than $75,000 be published. However, some districts/universities may
        contain outdated data. This will be fixed in an upcoming update.
      </p>
      <h2 className="text-3xl font-bold pt-5">Technical Details</h2>
      <p className="text-xl mx-auto min-w-xl max-w-4xl">
        Many different methods were used to parse the data in the respective
        PDFs. Initially, I tried to parse the tables with Tabula but quickly
        found that it didn’t work all that well. It required a lot of manual
        adjusting, which was tedious to do. I contacted Nathan Griffiths from
        the Vancouver Sun as they have completed{" "}
        <a
          href="https://vancouversun.com/news/local-news/bc-public-sector-salaries-database-sunshine-list"
          target="blank"
        >
          something similar
        </a>
        Their database covers all public servants but also contains outdated
        data for certain districts/institutions. Nathan had told me that from
        his experience, there was no way around manual cleanup when using Tabula
        or Adobe Acrobat.
      </p>
      <p className="text-xl mx-auto min-w-xl max-w-4xl pt-5">
        Through trial and error, I discovered an optimal data parsing method. It
        involved copying all the data as plaintext through a PDF viewer and
        cleaning it with Python. This was much better than Tabula because Tabula
        would occasionally miss some aspects if formatted strangely. By avoiding
        Tabula, I could ensure I would not miss any data, plus the cleaning was
        a lot easier. The database is mainly filled with data I parsed, but I
        used the Vancouver Sun’s data for a few districts. Eventually, the
        database will soon contain data entirely collected by me.
      </p>
      <p className="text-xl mx-auto min-w-xl max-w-4xl pt-5">
        The front end of this site was initially built using vanilla React with
        an Express.js backend and deployed on AWS Elastic Beanstalk. However,
        the current deployment is created with Next.js and deployed on Vercel
        since Next.js v13 makes everything more manageable (and it’s free). The
        backend uses the fuzzy npm module, which means misspelled queries should
        still work! The website includes a responsive design with Tailwind CSS
        and supports mobile devices.
      </p>
    </div>
  );
};

export default About;
