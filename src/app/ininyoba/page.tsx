import axios from 'axios';
import React from 'react'

function page() {
    async function submitNCR() {
        const url = `${process.env.NEXT_PUBLIC_URL}/api/login` ;
        try {
          //setIsLoading(true);
          const res = await axios.post(
            url,
            {
              withCredentials: true,
            }
          );
          // router.push("/home");
        } catch (error: any) {
          console.log(error);
          // setIsLoading(false);
          alert(error);
        }
      }
  return (
    <div>page</div>
  )
}

export default page