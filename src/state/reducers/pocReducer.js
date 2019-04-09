// import * as ACTION from "../../metadata/actionTypes";

const origin = {
  data: {
    week_totle_leads: 234144,
    leads_dist_rate: 0.694,
    total_dist_num: 162452,
    vip_cust_rate: 0.198,
    aum_imp_est: 13.5,

    chart: {
      total_leads_num: 234144,
      contact_num: 0,
      reject_num: 0,
      merge_filter_num: 201,
      other_num: 2045,
      unallocate_fm: 37068,
      unallocate_org: 32378,
      dist_merge_leads: 25774,
      dist_cust: 136678,

      total_leads_num_aux: 0,
      contact_num_aux: 234144,
      reject_num_aux: 234144,
      merge_filter_num_aux: 233943,
      other_num_aux: 231898,
      unallocate_fm_aux: 194830,
      unallocate_org_aux: 162452,
      dist_merge_leads_aux: 162452,
      dist_cust_aux: 0,
    }
  }
};

const pocReducer = (state = origin, action) => {
  return state;
}

export default pocReducer;
