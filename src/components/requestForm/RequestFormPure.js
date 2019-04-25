import React from 'react'
import './request-form.less'
import { FormattedMessage } from 'react-intl'

const Radio = ({ value, name }) => (
  <div className="request-form__radio-wrapper">
    <input
      className="request-form__radio"
      type="radio"
      name={name}
      value={value}
    />
    <p className="request-form__radio-label">{value}</p>
  </div>
)

const RadioBox = ({ box }) => (
  <>
    <label className="request-form__radios-label">
      <FormattedMessage id={box.label} />
    </label>
    <div className="request-form__radios-wrapper">
      {box.values.map((value, i) => (
        <Radio value={value} name={box.name} key={`radioBox${box.name}${i}`} />
      ))}
    </div>
  </>
)

const RequestFormPure = ({ content, handleSubmit, buttonStatus }) => {
  return (
    <form className="request-form" onSubmit={handleSubmit}>
      {content.inputs.map((input, i) => (
        <FormattedMessage id={input.placeholder}>
          {placeholder => (
            <input
              className="request-form__input"
              type={input.type}
              placeholder={placeholder}
              required={input.required}
              name={input.name}
              key={`requestFormInput${i}`}
            />
          )}
        </FormattedMessage>
      ))}
      <div className="request-form__radio-boxes">
        {content.radioBoxes.map((radioBox, boxIndex) => (
          <RadioBox box={radioBox} key={`requestFormRadioBoxes${boxIndex}`} />
        ))}
      </div>
      <button className="button button_theme_main" type="submit">
        {buttonStatus || 'Create SECURITY TOKEN'}
      </button>
    </form>
  )
}

export default RequestFormPure
