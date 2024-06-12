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

        const url = `${ENV.API_URL_TEMPORAL}${ENV.ENDPOINTS.PLATFORM}/${slug}`;
       const response = await fetch(url, {next: { revalidate: 10 }});
       const result = await response.json();

       console.log({result})


      if(response.status !== 200) throw result;
       return  result.data;
    
    } catch (error) {
        console.log('ocurrio un error...')
        console.log(error);
        throw error;
    }
    }
}


