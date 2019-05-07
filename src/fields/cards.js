import * as COMPONENT from "../constants/componentTypes";

const styleType = "primary";
const cssFor = "font-12";
const size = "small";

const badgeField = {
  type: COMPONENT.ICON,
  size: 10,
  icon: "hint"
};

const textField = {
  children: [{
    cssFor: "insight-card-text",
    children: [
      {
        type: COMPONENT.TEXT,
        cssFor: "text-strong",
        textId: "富裕家庭"
      },
      {
        type: COMPONENT.TEXT,
        textId: "用例在黄金和白金客群平均价值很高，但总价值较低，建议反馈给数据科学家团队确认是否可拓展模型范围"
      }
    ]
  }]
};

const tagField = {
  cssFor: "insight-card-tags",
  children: [{
    type: COMPONENT.TAG,
    name: "sampleTag",
    cssFor,
    events: {
      onClick: "click on tag"
    },
    textId: "大众总价值低"
  }, {
    type: COMPONENT.TAG,
    cssFor,
    textId: "大众平均价值低"
  }, {
    type: COMPONENT.TAG,
    cssFor,
    textId: "有效总价值低"
  }, {
    type: COMPONENT.TAG,
    cssFor,
    textId: "有效平均价值低"
  }]
};

const footerField = {
  cssFor: "insight-card-footer",
  children: [{
    type: COMPONENT.BUTTON,
    cssFor, size,
    textId: "影响评估"
  }, {
    type: COMPONENT.BUTTON,
    cssFor, size,
    textId: "邮件通知"
  }, {
    type: COMPONENT.BUTTON,
    styleType,
    cssFor, size,
    textId: "执行并通知"
  }]
};

export const insightCard = {
  type: COMPONENT.LAYOUT,
  width: 6,
  offset: 1,
  children: [{
    badge: badgeField,
    cssFor: "insight-card",
    children: [
      {
        cssFor: "insight-card-body",
        children: [
          textField,
          tagField
        ]
      },
      footerField
    ]
  }]
};
