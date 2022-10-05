import { useCallback, useState } from 'react'
import PropTypes from 'prop-types';
import styles from "./styles/listItem.module.css";

const ListItem = ({text}) => {
  const [checked, setChecked] = useState(false);

  const onToggle = useCallback(() => {
    setChecked(!checked)
  },[checked])

  return <div className={styles.listItem}>
    <input type="checkbox" checked={checked} onChange={onToggle}/>
    <p>{text}</p>
  </div>
}

ListItem.defaultProps = {};
ListItem.propTypes = {
  text: PropTypes.string
};

export default ListItem;
