import { Common } from './miba-login.common';
export declare class MibaLogin extends Common {
    get(): any;
    init( apiUrl: string, appId: string, appName: string): any;
}

declare module baid {
	export module gcba {
		export module com {
			export module loginbaid {
				export class AResponse {
					public data: any;
					public success: boolean;
					public errors: any;
					public constructor();
				}
			}
		}
	}
}

declare module baid {
	export module gcba {
		export module com {
			export module loginbaid {
				export class BAIdCallback {
					/**
					 * Constructs a new instance of the baid.gcba.com.loginbaid.BAIdCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onSuccess(param0: any): void;
						onCancel(): void;
						onError(param0: baid.gcba.com.loginbaid.BAIdException): void;
						onChangePass(): void;
					});
					public onChangePass(): void;
					public onError(param0: baid.gcba.com.loginbaid.BAIdException): void;
					public onCancel(): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module baid {
	export module gcba {
		export module com {
			export module loginbaid {
				export class BAIdException {
					public constructor(param0: string);
				}
			}
		}
	}
}
