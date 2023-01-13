import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./decrypt.css"

const Decrypt = () => {

    const brain = () =>{
        let encrypt_number = Number(document.getElementById("select").value);
        let left_text = document.getElementById("textarea1").value;
        let list_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

        let list_alphabet_rev = list_alphabet.reverse()

        let k = -1;
        let encrypt_sentence = [];
        for (let i = 1; i <= left_text.length; i++) {
          if ((left_text[k+1] >= 'a' && left_text[k+1] <= 'z') || (left_text[k+1] >= 'A' && left_text[k+1] <= 'Z')) {
            let index_orig_sentence = list_alphabet_rev.indexOf(left_text[k+1])
            let word = list_alphabet_rev[index_orig_sentence + encrypt_number]
            encrypt_sentence.push(word)
            k++
          } else if (left_text[k+1] >= '0' && left_text[k+1] <= '9') {
            encrypt_sentence.push(left_text[k+1])
            k++
          } else if (left_text[k+1] === " " || left_text[k+1] === "."  || left_text[k+1] === "," || left_text[k+1] === "!" || left_text[k+1] === "?" || left_text[k+1] === "'" || left_text[k+1] === '"') {
            encrypt_sentence.push(left_text[k+1])
            k++
          }
          }
          let join_arr = encrypt_sentence.join("")
          document.getElementById("textarea2").textContent = join_arr;
    }

    const reload = () => {
        document.location.reload()
    }

  return (
    <motion.div>
    <div>
        <div className='headdiv'>
            <p className='headtext'>Decryption tool</p>
        </div>
        <div className='container'>
            <div className='inputdiv'>
                <div className='qwe'>
                <p>SHIFT:</p>
                <select id='select' className='select'>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                </select>
                </div>
                <div className='arc'>
                <textarea placeholder='enter desired text...' id='textarea1' className='textarea1'></textarea>
                <div className='butdiv'>
                <button className='button' onClick={brain}>decrypt</button>
                <button className='button1' onClick={reload}>refresh</button>
                <Link className="link1" to="/encrypt">
                    <button className='button2'>!next</button>
                </Link>
                </div>
                </div>
            </div>


            <div className='outputdiv'>
                <p className='rze'>output</p>
                <textarea id='textarea2' className='textarea2'></textarea>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Decrypt