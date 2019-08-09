import axios from "axios";

 export default {
    getCompetitors: function(){
        return axios.get("localhost:3001/competitors")
    }
}

