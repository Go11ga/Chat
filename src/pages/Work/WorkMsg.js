import React, { useContext } from 'react';

import storesContext from '@/contexts/stores';
import { observer } from 'mobx-react';

import Header from '@/components/header';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';

function WorkMsg(){
    let { messages: messagesStore, auth: authStore } = useContext(storesContext);
    let { workMsgArr, currentMsg, changeCurrentMsg, addMsg, deleteMsg, openMsg, correctMsg, closeMsg } = messagesStore;
    let { incData } = authStore;
    let id = authStore.rootStore.storage['USER_ID'];

    let workMsgArrPrint = workMsgArr.map((item) => {
        return <div key={item.key}>
            <p className={item.id == id ? styles.user : styles.msg}>{item.time} <b>{item.id}</b></p>
            {item.correct
                 && <div>
                        <Form>
                            <Form.Group controlId="changeMsg">
                                <Form.Control
                                    type="text"
                                    value={item.text}
                                    onChange={(e) => correctMsg(item.key, e.target.value)}
                                />
                            </Form.Group>
                            <Button
                                variant="success"
                                onClick={()=>closeMsg(item.key)}
                                className="mb-2"
                            >
                                Save and Close
                            </Button>
                        </Form>
                 </div>}
            {
                item.id == id
                ? <div className={styles.user__box}>
                    <div className={styles.user__msg}>
                        <p className="alert alert-danger">
                        {item.text}
                    </p>
                    </div>
                    <div className={styles.user__btn}>
                        <Button variant="warning" size="sm" onClick={() => openMsg(item.key)} className="mr-1">C</Button>
                        <Button variant="danger" size="sm" onClick={() => deleteMsg(item.key)}>X</Button>
                    </div>
                </div>
                : <div className={styles.msg__box}>
                    <div className={styles.msg__msg}>
                        <p className="alert alert-success">
                        {item.text}
                    </p>
                    </div>
                </div>
            }
        </div>
    })

    return <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.content}>
                {workMsgArrPrint}
            </div>
            <div>
                <Form>
                    <Form.Group controlId="inputMsg">
                        <Form.Control
                            type="text"
                            value={currentMsg}
                            onChange={(e) => changeCurrentMsg(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={addMsg}
                        className="mb-2"
                    >
                        Send
                    </Button>
                </Form>
            </div>
        </div>
}

export default observer(WorkMsg);

