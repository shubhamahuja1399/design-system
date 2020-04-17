export declare type View = 'date' | 'month' | 'year';
export declare type Day = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
export declare type DateFormat = 'mm/dd/yy' | 'dd/mm/yy' | 'yy/mm/dd' | 'mm-dd-yy' | 'dd-mm-yy' | 'yy-mm-dd';
export declare type DateObject = {
    year: number;
    month: number;
    date: number;
};
export declare type DateType = number | Date | string;
export declare type State = {
    year?: number;
    month?: number;
    date?: number;
};
