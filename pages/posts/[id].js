/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <br />
      {postData.id}
      <br />
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
    </Layout>);
}

export async function getStaticPaths() {
  // return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({params}) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
