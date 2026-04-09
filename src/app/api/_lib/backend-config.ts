import "server-only";

//backend configuration (use in API routes)
export function getBackendConfig() {
    return {
        registryStaffApiUrl: process.env.REGISTRY_STAFF_API_URL ?? "",
        masterdataApiUrl: process.env.MASTERDATA_API_URL ?? "",
        iamApiUrl: process.env.IAM_API_URL ?? "",
        loginProviderId: process.env.LOGIN_PROVIDER_ID ?? "",
        applicationMnemonic: process.env.APPLICATION_MNEMONIC ?? "openg2p-registry",
        registryPartnerApiUrl: process.env.REGISTRY_PARTNER_API_URL ?? "",
    };
}
