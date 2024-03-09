export type SelectProps = {
    options: Array<OptionData>;
    onChange: (option: OptionData) => void;
    placeholder?: string;
    current?: OptionData;
}
export type OptionData = {
    id: number;
    value: string;
}
export type OptionType = {
    option: OptionData;
    onClick: (option: OptionData) => void;
}