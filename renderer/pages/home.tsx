import Head from "next/head";
import Link from "next/link";
import React from "react";
import JobTimer from "../components/jobTimer";
import RecordOperation from "../components/recordOperate";
import TypeSelector from "../components/typeSelector";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript-ant-design)</title>
      </Head>

      {/* <Header>
        <Link href="/next">
          <a>Go to next page</a>
        </Link>
      </Header> */}
      <div className="record">
        <div className="record-left">
          <JobTimer />
          <TypeSelector />
        </div>
        <div className="record-right">
          <RecordOperation />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
