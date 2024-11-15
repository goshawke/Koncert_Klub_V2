
import AWS from "aws-sdk"


const s3 = new AWS.S3();
const bucketName = 'koncert-klub';
const region = 'us-east-1';

const getPublicMediaUrls = async (prefix) => {
  try {
    const response = await fetch(`https://${bucketName}.s3.${region}.amazonaws.com/media-urls.json`);
    let urls = await response.json();
    urls = urls.filter(url => url.includes(`${prefix}/`)); // Adjusted prefix filtering
    urls = urls.filter(url => !url.includes(`DS_Store`)); // Filter out unwanted files

    return urls;
  } catch (error) {
    console.error('Error fetching media URLs:', error);
    return []; // Return an empty array on error to avoid breaking the app
  }
};
export default getPublicMediaUrls;