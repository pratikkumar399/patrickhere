import axios from "axios"

export const fetchBlogs = async () => {
   try{
     const response = await axios("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@raipratik399");
     return {response : response?.data};
   }
   catch(e){
    //  alert("Error while fetching blogs");
     return {error :  e};
   }
}
