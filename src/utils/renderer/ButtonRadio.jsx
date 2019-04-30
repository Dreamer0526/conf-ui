import React from "react";
import { Radio } from "antd";
import PropTypes from 'prop-types';
import { FormattedMessage } from "react-intl";


class ButtonRadio extends React.Component {

  render() {
    const { options, events, defaultSelectedKey } = this.props;

    return (
      <Radio.Group size="small" defaultValue={defaultSelectedKey} {...this.props.registerEvents(events)} >
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
    );
  }
}


ButtonRadio.propTypes = {
  events: PropTypes.object,
  options: PropTypes.array,
  defaultSelectedKey: PropTypes.string
};

ButtonRadio.defaultProps = {
  events: {},
  options: []
};

export default ButtonRadio;
