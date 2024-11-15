
import AWS from "aws-sdk"


const s3 = new AWS.S3();
const bucketName = 'koncert-klub';
const region = 'us-east-1';

const getMediaUrls = async (prefix) => {
  try {
    const params = {
      Bucket: bucketName,
      Prefix: '' // Optional: specify a folder name if your media is organized in folders
    };

    // Fetch data from S3
    const data = await s3.listObjectsV2(params).promise();
    const urls = data.Contents.map(item => `https://${bucketName}.s3.${region}.amazonaws.com/${item.Key}`);

    return urls;
  } catch (error) {
    console.error('Error fetching media:', error);
  }
};

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