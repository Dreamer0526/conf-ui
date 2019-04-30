import React from "react";
import { Radio, Col } from "antd";
import PropTypes from 'prop-types';
import { FormattedMessage } from "react-intl";


class ButtonRadio extends React.Component {

  render() {
    const { options, events, defaultSelectedKey, width, offset, cssFor } = this.props;

    return (
      <Col xs={width} offset={offset} className={cssFor}>
        <Radio.Group defaultValue={defaultSelectedKey} {...this.props.registerEvents(events)} >
          {
            options.map(({ key, textId }) => (
              <Radio.Button value={key} key={`renderer-btn-radio-${key}`}>
                <FormattedMessage
                  id={textId}
                  defaultMessage={textId}
                />
              </Radio.Button>
            ))
          }
        </Radio.Group>
      </Col>
    );
  }
}


ButtonRadio.propTypes = {
  width: PropTypes.number,
  offset: PropTypes.number,
  events: PropTypes.object,
  cssFor: PropTypes.string,
  options: PropTypes.array,
  defaultSelectedKey: PropTypes.string
};

ButtonRadio.defaultProps = {
  width: 6,
  offset: 0,
  cssFor: "",
  events: {},
  options: []
};

export default ButtonRadio;
