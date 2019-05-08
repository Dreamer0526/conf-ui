import { get } from "lodash";

import barData from "../../../mock/feedback-bar";
import lineData from "../../../mock/feedback-line";
import getBarOption from "../metadata/barChartOption";
import getLineOption from "../metadata/lineChartOption";

import * as KEY from "../../../constants/elementKey";
import * as ACTION from "../../../constants/actionTypes";


const colorScheme = {
  [KEY.LEAD_VALUE]: ["#00C9FE", "#0082F0"],
  [KEY.EXEC_CONVERT]: ["#FFAB00", "#00CBC5"]
};

const seriesShow = {
  [KEY.LEAD_VALUE]: ["exec_avg_value", "exec_tot_value"],
  [KEY.EXEC_CONVERT]: ["exec_rate", "convert_rate"]
};

const origin = {
  useCases: {
    msgCount: 3,
    activeChart: KEY.LEAD_VALUE,
    mainChartOption: getMainOption(),
    tooltipChartOption: {},
    collapseChartOption: {}
  },
  branches: {
    msgCount: 1
  },
  custGroups: {
    msgCount: 2,
  }
};

function getMainOption(activeChart = KEY.LEAD_VALUE) {
  const xData = get(barData, "lead_names", []);

  let seriesNameDataPair = {};
  seriesShow[activeChart].forEach(name => {
    seriesNameDataPair[name] = get(barData, name, [])
  });

  const option = getBarOption(xData, seriesNameDataPair);

  return {
    ...option,
    color: colorScheme[activeChart]
  }
}

function getTooltipOption(targetName, targetSeries) {
  const targetId = findIdByName(targetName);

  const targetData = get(lineData, `${targetId}.main_kpi.${targetSeries}`);
  const targetItem = {
    type: "line",
    name: targetName,
    data: targetData
  };

  const bestData = get(lineData, `benchmark.${targetSeries}.best.value`);
  const bestLeadId = get(lineData, `benchmark.${targetSeries}.best.lead_id`);
  const bestName = findNameById(bestLeadId);
  const bestItem = {
    type: "line",
    name: bestName,
    data: bestData
  }

  const worstData = get(lineData, `benchmark.${targetSeries}.worst.value`);
  const worstLeadId = get(lineData, `benchmark.${targetSeries}.worst.lead_id`);
  const worstName = findNameById(worstLeadId);
  const worstItem = {
    type: "line",
    name: worstName,
    data: worstData
  }


  const xData = get(lineData, `${targetId}.main_kpi.dist_date`, []);
  return getLineOption(xData, targetItem, bestItem, worstItem)
}

function getCollapseOption(targetName) {
  const targetId = findIdByName(targetName);
  const aumData = get(lineData, `${targetId}.aum_change`);
  const { dist_date, exec_avg_aum, base_avg_aum } = aumData;

  const execItem = {
    type: "line",
    name: "exec_avg_aum",
    data: exec_avg_aum
  };

  const baseItem = {
    type: "line",
    name: "base_avg_aum",
    data: base_avg_aum
  }

  return getLineOption(dist_date, execItem, baseItem);
}


function findIdByName(name) {
  const { lead_id, lead_names } = barData;
  const index = lead_names.indexOf(name);
  return lead_id[index];
}

function findNameById(id) {
  const { lead_id, lead_names } = barData;
  const index = lead_id.indexOf(id);
  return lead_names[index];
}


function updateTooltip(state, payload) {
  const { name, seriesName } = payload;
  const tooltipChartOption = getTooltipOption(name, seriesName);

  return {
    ...state,
    useCases: {
      ...state.useCases,
      tooltipChartOption
    }
  };
}

function updateCollapse(state, payload) {
  const { name } = payload;
  const collapseChartOption = getCollapseOption(name);

  return {
    ...state,
    useCases: {
      ...state.useCases,
      collapseChartOption
    }
  };
}

function updateMain(state, activeChart) {
  const mainChartOption = getMainOption(activeChart);
  return {
    ...state,
    useCases: {
      ...state.useCases,
      mainChartOption,
      activeChart
    }
  };
}


const feedbackReducer = (state = origin, action) => {
  const { type, payload, elemKey } = action;

  switch (type) {
    case ACTION.MOUSE_OVER_CHART_ITEM_PARAMS:
      return updateTooltip(state, payload);

    case ACTION.MOUSE_CLICK_CHART_ITEM_PARAMS:
      return updateCollapse(state, payload);

    case ACTION.SWITCH_USE_CASE_CHART:
      return updateMain(state, elemKey);

    default:
      return state;
  }
}

export default feedbackReducer;
