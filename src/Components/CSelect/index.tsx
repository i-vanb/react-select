import styles from './Select.module.css';
import {SelectProps, OptionType} from "./props.type";
import {useState, useRef, useEffect, MouseEventHandler} from "react";


function Select(props:SelectProps) {
    const {onChange, options, placeholder = '', current} = props;

    const [isActive, setIsActive] = useState<boolean>(false);
    const openDropdown:MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setIsActive(!isActive);
    }

    const ref = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const clickOutside = () => setIsActive(false);

        document.addEventListener("click", clickOutside);
        return () => {
            document.removeEventListener("click", clickOutside);
        };
    }, [isActive]);

    const buttonClass = `${styles.select__button} ${isActive ? styles.active : ''}`;
    const optionsClass = `${styles.options} ${isActive ? styles.open : ''}`;

    return (
        <div className={styles.select}>
            <button className={buttonClass}
                    onClick={openDropdown}
            >{current?.value || placeholder}</button>
            <ul ref={ref} className={optionsClass}>
                {options.map((option) =>
                    <Option key={option.id}
                            option={option}
                            onClick={onChange}
                    />
                )}
            </ul>
        </div>
    );
}

const Option = ({ option, onClick }:OptionType) => {

    const onClickHandler = () => onClick(option);

    return (
        <li className={styles.option} onClick={onClickHandler}>
            <span className="c-select__option__label">{option.value}</span>
        </li>
    );
};

export default Select;