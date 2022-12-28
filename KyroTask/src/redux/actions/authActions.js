export function loginWithPasswordRequest(data, updateStatus) {
  return {
    type: '@auth/LOGIN',
    payload: {data, updateStatus},
  };
}
