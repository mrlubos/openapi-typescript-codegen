export default {
  compiler: [8, '>= 4.3.0'],
  main: function (container, depth0, helpers, partials, data) {
    return "export const catchErrorCodes = (options: ApiRequestOptions, result: ApiResult): void => {\n	const errors: Record<number, string> = {\n		400: 'Bad Request',\n		401: 'Unauthorized',\n		402: 'Payment Required',\n		403: 'Forbidden',\n		404: 'Not Found',\n		405: 'Method Not Allowed',\n		406: 'Not Acceptable',\n		407: 'Proxy Authentication Required',\n		408: 'Request Timeout',\n		409: 'Conflict',\n		410: 'Gone',\n		411: 'Length Required',\n		412: 'Precondition Failed',\n		413: 'Payload Too Large',\n		414: 'URI Too Long',\n		415: 'Unsupported Media Type',\n		416: 'Range Not Satisfiable',\n		417: 'Expectation Failed',\n		418: 'Im a teapot',\n		421: 'Misdirected Request',\n		422: 'Unprocessable Content',\n		423: 'Locked',\n		424: 'Failed Dependency',\n		425: 'Too Early',\n		426: 'Upgrade Required',\n		428: 'Precondition Required',\n		429: 'Too Many Requests',\n		431: 'Request Header Fields Too Large',\n		451: 'Unavailable For Legal Reasons',\n		500: 'Internal Server Error',\n		501: 'Not Implemented',\n		502: 'Bad Gateway',\n		503: 'Service Unavailable',\n		504: 'Gateway Timeout',\n		505: 'HTTP Version Not Supported',\n		506: 'Variant Also Negotiates',\n		507: 'Insufficient Storage',\n		508: 'Loop Detected',\n		510: 'Not Extended',\n		511: 'Network Authentication Required',\n		...options.errors,\n	}\n\n	const error = errors[result.status];\n	if (error) {\n		throw new ApiError(options, result, error);\n	}\n\n	if (!result.ok) {\n		const errorStatus = result.status ?? 'unknown';\n		const errorStatusText = result.statusText ?? 'unknown';\n		const errorBody = (() => {\n			try {\n				return JSON.stringify(result.body, null, 2);\n			} catch (e) {\n				return undefined;\n			}\n		})();\n\n		throw new ApiError(options, result,\n			`Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`\n		);\n	}\n};";
  },
  useData: true,
};
