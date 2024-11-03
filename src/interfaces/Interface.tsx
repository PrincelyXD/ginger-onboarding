export interface SupplierProfile {
  description: string;
  revenueStatus: string;
  helpRequest: {
    [key:string]: boolean
  } | null
}
export interface userOptionsInterface {
  introduceMyBrandToNewMarket: boolean;
  expandCustomerReach: boolean;
  kickstartDistributorJourney: boolean;
  streamlineExistingBusinessOperation: boolean;
}

export interface SelectOptionsInterface {
  optionName: string;
  optionStateName: string;
  optionState: boolean;
  setOption: Function;
}

export interface CheckedSvgColor {
  bodyFill: string;
}
