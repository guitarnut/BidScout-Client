import {authorized} from "../api/restapi";

export function checkAuth(context) {
  if (!authorized()) {
    context.props.history.push('/login')
  }
}

export function pageNotFound(context) {
  context.props.history.push('/404')
}

export function redirect(context, target) {
  context.props.history.push(target)
}

let dateFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

export function convertMilliToDateString(v) {
  if (v === 0) {
    return 'Not available';
  }
  return new Date(v).toLocaleDateString("en-US", dateFormatOptions);
}
