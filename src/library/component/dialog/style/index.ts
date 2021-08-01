import styled from '@emotion/styled';

import { COLOR } from '@/library/styles/constant';

export const DialogWrapper = styled.div<{ show: boolean }>(({ show }) => ({
  '&::before': {
    content: `''`,
    display: `inline-block`,
    height: `100%`,
    verticalAlign: `middle`,
    width: 0
  },
  bottom: 0,
  left: 0,
  opacity: show ? 1 : 0,
  outline: 0,
  overflow: `auto`,
  position: `fixed`,
  right: 0,
  textAlign: `center`,
  top: 0,
  transform: show ? `translate(0)` : `translateY(100%)`,
  transition: `all 0.6s`,
  visibility: show ? `visible` : `hidden`,
  zIndex: 99999999
}));

export const DialogStyled = styled.div<{ show: boolean }>(({ show }) => ({
  background: `#fff`,
  borderRadius: 8,
  boxShadow: `0 -2px 16px 0 rgba(0, 0, 0, 0.1)`,
  display: `inline-block`,
  flex: 1,
  margin: `32px auto`,
  maxWidth: 300,
  opacity: show ? 1 : 0,
  overflow: `hidden`,
  position: `relative`,
  textAlign: `left`,
  top: 0,
  transition: `transform 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s`,
  verticalAlign: `middle`,
  width: `100%`
}));

export const DialogHeader = styled.div({
  alignItems: `center`,
  background: COLOR.white,
  borderBottom: `1px dashed #ddd`,
  display: `flex`,
  justifyContent: `space-between`,
  padding: 16,
  position: `relative`,
  zIndex: 9
});

export const DialogClose = styled.div({
  alignItems: `center`,
  display: `flex`,
  justifyContent: `center`,
  position: `absolute`,
  right: 16,
  top: `50%`,
  transform: `translateY(-50%)`
});

export const DialogBody = styled.div({
  padding: 16,
  wordBreak: `break-word`
});

export const DialogFooter = styled.div({
  display: `flex`,
  justifyContent: `flex-end`,
  padding: `12px 16px`
});
