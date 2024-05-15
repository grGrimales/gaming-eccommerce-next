import {ENV} from '@/utils';

  

export class Platform {
    async getAll() {
        try {

          //  const sort = "sort=order:asc"
          //  const populate = "populate=icon"
            const url = `${ENV.API_URL_TEMPORAL}${ENV.ENDPOINTS.PLATFORM}`;

            const response = await fetch(url);
            const result = await response.json();
            if(response.status !== 200) throw result;

            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getBySlug(slug) {
    try {
        const filters = `filters[slug][$eq]=${slug}`	

        //const url = `${ENV.API_URL}${ENV.ENDPOINTS.PLATFORM}?${filters}`;
      //  const url = "http://localhost:1337/api/platforms?filters[slug][$eq]=xbox"
      //  const response = await fetch(url);
       // const result = await response.json();

       // console.log("result", result);


      //  if(response.status !== 200) throw result;
      //  return  result.data[0];

      return 	{
        "id": 3,
        "attributes": {
            "title":slug,
            "slug": slug.toLowerCase(),
            "order": 2,
            "createdAt": "2023-09-13T09:44:33.002Z",
            "updatedAt": "2023-09-13T09:44:33.991Z",
            "publishedAt": "2023-09-13T09:44:33.986Z"
        }
    }
    } catch (error) {
        console.log('ocurrio un error...')
        console.log(error);
        throw error;
    }
    }
}


