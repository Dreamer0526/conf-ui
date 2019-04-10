// import * as ACTION from "../../metadata/actionTypes";

const origin = {
  data: {
    week_total_leads: 234144,
    leads_dist_rate: 0.694,
    total_dist_num: 162452,
    vip_cust_rate: 0.198,
    aum_imp_est: 13.5,

    chart: {
      origData: [234144, 0, 0, 201, 2045, 37068, 32378, 25774, 136678],
      auxData: [0, 234144, 234144, 233943, 231898, 194830, 162452, 162452, 0]
    }
  }
};

const pocReducer = (state = origin, action) => {
  return state;
}

export default pocReducer;
