import axios from "axios";

const API_URL='/api/kullanicilar/'

const register=async (kullaniciData)=>{
    const response=await axios.post(API_URL, kullaniciData)
    if(response.data){
        localStorage.setItem('kullanici',JSON.stringify(response.data))
    }
    return response.data

}

const authService={
    register
}

export default authService;

