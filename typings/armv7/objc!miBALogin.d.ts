
declare class BAIDLogin extends NSObject {

static alloc(): BAIDLogin; // inherited from NSObject

static new(): BAIDLogin; // inherited from NSObject

readonly accessToken: string;

readonly profile: NSDictionary<string, any>;

constructor(o: { window: UIWindow; });

dismiss(): void;

initFirebase(): void;

initWithWindowError(window: UIWindow): this;

isValidTokenWithCompletion(completion: (p1: boolean) => void): void;

loginWithOverSuccessCancelShowsCancelButton(over: UIViewController, success: (p1: string) => void, cancel: () => void, showsCancelButton: boolean): void;

logoutWithSuccessFailure(success: () => void, failure: () => void): void;
}

declare var miBALoginVersionNumber: number;

declare var miBALoginVersionString: interop.Reference<number>;
