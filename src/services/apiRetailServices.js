import axios from "axios";

const onGlobalSuccess = (response) => {
    /// Should not use if you need access to anything other than the data
    return response.data;
};

const onGlobalError = (err) => {
    
    //Waits for promise to catch error
    return Promise.reject(err);
};

let getAllAssignedCoupons = () => {
    const config = {
        method: "GET",
        url: `https://x8ki-letl-twmt.n7.xano.io/api:Z-_eHuah/assignedcoupon`,
      };
      return axios(config).then(onGlobalSuccess).catch(onGlobalError);
}

let getAllCoupons = () => {
    const config = {
        method: "GET",
        url: `https://x8ki-letl-twmt.n7.xano.io/api:Z-_eHuah/coupon`,
      };
      return axios(config).then(onGlobalSuccess).catch(onGlobalError);
}

let getAllCustomers = () => {
    const config = {
        method: "GET",
        url: `https://x8ki-letl-twmt.n7.xano.io/api:Z-_eHuah/customer`,
      };
      return axios(config).then(onGlobalSuccess).catch(onGlobalError);
}

export { getAllAssignedCoupons, getAllCoupons, getAllCustomers}