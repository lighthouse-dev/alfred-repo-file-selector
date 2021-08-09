import alfy from 'alfy';
import normalize from 'unorm';
import dotenv from 'dotenv';
import { Octokit } from '@octokit/core';

dotenv.config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const GITHUB_REPOSITORY_NAME = process.env.GITHUB_REPOSITORY_NAME || '';
const NO_RESULT_DATA = [{ title: 'No match data.' }];

const octokit = new Octokit({ auth: GITHUB_TOKEN });

const fetchData = async searchText => {
  if (!searchText.length) {
    return NO_RESULT_DATA;
  }

  const response = await octokit.request('GET /search/code', {
    q: `${searchText}+in:file,path+repo:${GITHUB_REPOSITORY_NAME}`,
    json: true
  });

  const items = response?.data?.items || null;
  return items?.length
    ? items.map(item => ({
        title: item.name,
        subtitle: item.path,
        arg: item.html_url
      }))
    : NO_RESULT_DATA;
};

const main = async () => {
  // Mac에서 한글이 자소 단위로 풀어지는 현상처리
  // - http://jmjeong.com/korean-patch-in-alfred-tweet/
  // - Alfred에서 넘겨주는 문자열을 NFC로 처리한 뒤 Encoding
  const searchText = normalize.nfc(alfy.input);

  const result = await fetchData(searchText);

  alfy.output(result);
};

main();
