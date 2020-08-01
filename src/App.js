import React, {useState} from 'react';
import Icon from './Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Col, Row, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const board = new Array(9).fill('empty');

const App = () => {
    const [isCross, setIsCross] = useState(false);
    const [win, setWin] = useState('');

    const reload = () => {
        setIsCross(false);
        setWin('');
        board.fill('empty', 0, 9);
    }

    const checkWinner = () => {
        if(board[0] === board[1] && board[1] === board[2] && board[0] !== 'empty')
    {
      setWin(`${board[0]} Wins`);
      toast(`${board[0]} Wins`, {
          type: 'success',
          position: 'top-center'
      })
    }
    else if(board[3] === board[4] && board[4] === board[5] && board[3] !== 'empty')
            {
              setWin(`${board[3]} Wins`);
              toast(`${board[3]} Wins`, {
                type: 'success',
                position: 'top-center'
            })
            }
    else if(board[6] === board[7] && board[7] === board[8] && board[6] !== 'empty')
            {
              setWin(`${board[6]} Wins`);
              toast(`${board[6]} Wins`, {
                type: 'success',
                position: 'top-center'
            })
            }
    else if(board[0] === board[3] && board[3] === board[6] && board[0] !== 'empty')
            {
              setWin(`${board[0]} Wins`);
              toast(`${board[0]} Wins`, {
                type: 'success',
                position: 'top-center'
            })
            }       
    else if(board[1] === board[4] && board[4] === board[7] && board[1] !== 'empty')
            {
              setWin(`${board[1]} Wins`);
              toast(`${board[1]} Wins`, {
                type: 'success',
                position: 'top-center'
            })
            }
    else if(board[2] === board[5] && board[5] === board[8] && board[2] !== 'empty')
            {
              setWin(`${board[2]} Wins`);
              toast(`${board[2]} Wins`, {
                type: 'success',
                position: 'top-center'
            })
            }
    else if(board[0] === board[4] && board[4] === board[8] && board[0] !== 'empty')
            {
              setWin(`${board[0]} Wins`);
              toast(`${board[0]} Wins`, {
                type: 'success',
                position: 'top-center'
            })
            }
    else if(board[2] === board[4] && board[4] === board[6] && board[2] !== 'empty')
            {
              setWin(`${board[2]} Wins`);
              toast(`${board[2]} Wins`, {
                type: 'success',
                position: 'top-center'
            })
            }
    }

    const changeItem = (item) => {
        if(win){
            return toast(win, {type: 'success', position: 'top-center'});
        }
        else if(board[item] === 'empty'){
            board[item] = isCross ? 'Cross' : 'Circle'
            setIsCross(!isCross);
        }
        else{
            toast('Already filled', {type: 'error', position: 'bottom-center'})
        }

        checkWinner();
    }


    return(
        <Container className='p-5'>
            <ToastContainer position='bottom-center' />
            <Row>
                <Col md={6} className='offset-md-3'>
                    <div className='grid'>
                        { board.map( (item, index) => (
                            <Card onClick={() => changeItem(index)}>
                                <CardBody className='box'> 
                                  <Icon name={item} />
                                </CardBody>
                            </Card>
                        ))}     
                    </div>
                    {
                        win ? (
                            <div className='md-2 mt-2'>
                                <h2 className='text-center'>
                                    {win}
                                </h2>
                                <Button block color='success' onClick={reload}>
                                    RELOAD
                                </Button>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default App;