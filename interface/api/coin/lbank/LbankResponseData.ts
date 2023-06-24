interface LbankResponseData {
  result: string; // boolean	API return，true/false
  error_code: number; // string	return error_code
  ts: number; // long	return timestamp
  data: object; //return body
}

export default LbankResponseData;
