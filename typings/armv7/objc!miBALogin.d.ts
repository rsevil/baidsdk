
declare class BAIDLogin extends NSObject {

	static alloc(): BAIDLogin; // inherited from NSObject

	static new(): BAIDLogin; // inherited from NSObject

	readonly accessToken: string;

	readonly profile: NSDictionary<string, any>;

	readonly profileJSON: string;

	constructor(o: { window: UIWindow; });

	dismiss(): void;

	initWithWindowError(window: UIWindow): this;

	isValidTokenWithCompletion(completion: (p1: boolean) => void): void;

	loginWithOverSuccessCancelShowsCancelButton(over: UIViewController, success: (p1: string) => void, cancel: () => void, showsCancelButton: boolean): void;

	logoutWithSuccessFailure(success: () => void, failure: () => void): void;

	showProfileWithOverSuccessCancel(over: UIViewController, success: (p1: ProfileUpdateOperation) => void, cancel: () => void): void;
}

declare const enum ProfileUpdateOperation {

	ProfileUpdated = 0,

	PasswordChanged = 1
}

declare var miBALoginVersionNumber: number;

declare var miBALoginVersionString: interop.Reference<number>;
