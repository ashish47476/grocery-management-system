
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductGrid.css';
import CategoryForm from './CategoryForm';
import { getCategories } from  '../services/category'


// Sample Products Data
export const products = [
    { id: 1, name: 'Milk', description: '1 liter of fresh milk', price: 28, image: 'https://imgs.search.brave.com/BM2RRy8IRT7H2X7EAZ5iR8k5_vHLEImnxWfgwz8JLbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/ODc1OTM1L3Bob3Rv/L3BvdXJpbmctbWls/ay5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SWlFSHNvZWhW/RHkwQU45VWdGTjBC/X1RrT1Flc2x1MmZs/SFNEbi1yQTU4az0', category: 'Grocery' },
    { id: 2, name: 'Bread', description: 'Whole grain bread', price: 34, image: 'https://imgs.search.brave.com/cG_pif8zItoxvhC2yYdQMImHOiS6LaeQ9dHcibtB4cQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDYwODM5L3Bob3Rv/L2ZyZW5jaC1icmVh/ZC1yb2xscy1pc29s/YXRlZC1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12M19pVGdQdWpy/TFozRFhsU0E4NEhh/cktRMW12NUV6Y1g0/NktCNWRzYkk4PQ', category: 'Grocery' },
    { id: 3, name: 'Eggs', description: 'A dozen large eggs', price: 9, image: 'https://imgs.search.brave.com/WFxNOZFkNp3BPUdm-brMjEMAGRZaA4X-ixfsjjnlU7I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTI3MDc0L3Bob3Rv/L2lzb2xhdGVkLWVn/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ckR0a2k0RWdJ/MzF1dGdibFk5Tnl6/SS15bXNPdGIyd2pv/MXN0RHhXSmxqdz0', category: 'Grocery' },
    { id: 4, name: 'Apples', description: 'Fresh apples, 1 kg', price: 90, image: 'https://imgs.search.brave.com/AsgeM1yt5NWFG7Fc4-q9qucSdreeJtH6elXcgqzRpis/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MjYyNjQ4L3Bob3Rv/L3JlZC1hcHBsZS13/aXRoLWxlYWYtaXNv/bGF0ZWQtb24td2hp/dGUtYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z1VUdlF1VlBV/eFVZWDFDRWotTjNs/VzVlUkZMbGtHclVf/Y3d3d09XeE9oOD0', category: 'Grocery' },
    { id: 5, name: 'Bananas', description: 'Bananas, 1 kg', price: 40, image: 'https://imgs.search.brave.com/0ynEzhMzckcd-96NZy7eLdNqKglM3OQpsP_q1sTQGWk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTI5/NzQ5NjMvcGhvdG8v/cGVlbGVkLWJhbmFu/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Q1hjOWNiMnRX/ZWIwTURVR1VoT3hC/RGZHLXl2bUtTSFdX/akR5RHBNR3V6Yz0', category: 'Grocery' },
    { id: 6, name: 'Tomatoes', description: 'Fresh tomatoes, 1 kg', price: 35, image: 'https://imgs.search.brave.com/zjRjjBV3E4jqZLayBLlPkM7crF34IosoYCLUftuI1t8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTMw/NDE5OTUvcGhvdG8v/dG9tYXRvLXctY2xp/cHBpbmctcGF0aC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WXhTNjFjRUNsclFI/XzZ6MDFqdFlXWjU0/RU5hcndwVE5TdWZH/YW9fV2wxST0', category: 'Grocery' },
    { id: 7, name: 'Chicken Breast', description: '500g of chicken breast', price: 140, image: 'https://imgs.search.brave.com/8RMABOyl4p5PU6IzN3RKUeyVAYzem1-qQMD2jdKZnsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTU5/MzQ4MDA4L3Bob3Rv/L2NoaWNrZW4tYnJl/YXN0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1SVHA0dmh4/aEN1MGlsaXJrY2g5/WnVxNDdoSlBjODhZ/UnNiZElsMXdIcmtn/PQ', category: 'Grocery' },
    { id: 8, name: 'Rice', description: '1 kg of rice', price: 98, image: 'https://imgs.search.brave.com/lboU1cuOkTgfidhyPfwAM01kL182aVx6sgQlPIW8KdA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUz/NzM3ODQxL3Bob3Rv/L3JpY2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWxmTzdp/TFQwVXNERHpyYTB1/Qk9zTjFydnIyZDVP/RXRyRzJ1d2J0czMz/X2M9', category: 'Grocery' },
    { id: 9, name: 'Pasta', description: '500g of pasta', price: 110, image: 'https://imgs.search.brave.com/fNJUC4FYSvaE6D76sIualr2eK8R7LTykWtWmMHUThCw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MDcyMzM1L3Bob3Rv/L3Bhc3RhLXBlbm5l/LXJpZ2F0ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YWNi/OFRBamJvb2MtNGVy/MWZkZGs2UjloaUR2/WlI4M2MtWUY3dFRZ/MWhUdz0', category: 'Grocery' },
    { id: 10, name: 'Cheese', description: '200g of cheddar cheese', price:65, image: 'https://imgs.search.brave.com/7wCBAqkW8f6z8PiISVNsUimxjdqUfk9n4LDiGrWa36w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg1/ODY1NzA4L3Bob3Rv/L2NoZWVzZS1waWVj/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWV5T1BIZ0Ez/MTBaTTI2NHF1dU1N/MjIzVTJRQnVlYzRw/azBCdkhwTjhKUmM9', category: 'Grocery' },
    { id: 11, name: 'Yogurt', description: '500g of plain yogurt', price:40, image: 'https://imgs.search.brave.com/xapwdBvufUUnO-b5kdWnC3eaC_8mpNq7dv5G-tZrEE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MDExMDI2OC9waG90/by9oZWFsdGh5LWJy/ZWFrZmFzdC13aXRo/LWZyZXNoLWdyZWVr/LXlvZ3VydC1vbi1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz13/eEkzUlpGdFVPQkZH/cHNVbkwtbFY5UnFo/Tm92TUpRRUVLTTR5/a2dpUGNZPQ', category: 'Grocery' },
    { id: 12, name: 'Butter', description: '250g of unsalted butter', price: 35, image: 'https://imgs.search.brave.com/gL00Jf49lgur5jAFK6RjppnWOYcr6JKANF4gJU8sISE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzI3LzAwLzg5/LzM2MF9GXzEyNzAw/ODk3NF9XVjlIcEhw/VUdvcGtPOFlTTnBL/YWpVd250VVRtaWRs/NC5qcGc', category: 'Grocery' },
    { id: 13, name: 'Orange Juice', description: '1 liter of orange juice', price:60, image: 'https://imgs.search.brave.com/o8FmzSORyMn47z5ZEG0j_zmTApxYkdSUvqzhTJTI9f4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbnNh/bmVseWdvb2RyZWNp/cGVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMC9I/b21lbWFkZS1Db2xk/LVRlcXVpbGEtU3Vu/cmlzZS1pbi1hLUds/YXNzLTgwMHg1MzAu/anBn', category: 'Beverages' },
    { id: 14, name: 'Potatoes', description: '1 kg of potatoes', price: 25, image: 'https://imgs.search.brave.com/FC5rbgz54nRLyp1QIS4K1jxZZXOETsX-Uanb3xIGH50/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3RhdG9lcy1m/cmVzaC1uYXR1cmFs/LXBvdGF0b2VzLWlz/b2xhdGVkLXNsaWNl/ZC1wb3RhdG9lc18x/MjEyMzQtMTcuanBn/P3NpemU9NjI2JmV4/dD1qcGc', category: 'Grocery' },
    { id: 15, name: 'Onions', description: '1 kg of onions', price: 45, image: 'https://imgs.search.brave.com/ERMDQW5OO7_-DsfvhMRe6DYBFnc2wBluPTRh9Jxw3To/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk5/MTQ2NDk4L3Bob3Rv/L3JlZC1vbmlvbnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWpPaW42OHYxRmVr/QzdTcVY0VHU1NUVa/OU0zYWRrSXloS0w4/Ui0xcVFJM0k9', category: 'Grocery' },
    { id: 16, name: 'Garlic', description: '3 bulbs of garlic', price: 90, image: 'https://imgs.search.brave.com/mB3of8BZNAlnvHFSOj7mSnNaV4qDi75JO-uaM6CXz6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk5/MTQ3ODY0L3Bob3Rv/L2dhcmxpYy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9LTli/NDgzVjZVUDJVcmxq/RVlaRGNFQkV3emtQ/cWIzdTVNSUozLU1h/b2Z1Yz0', category: 'Grocery' },
    { id: 17, name: 'Chicken Thighs', description: '500g of chicken thighs', price: 180, image: 'https://imgs.search.brave.com/PjP61-hOZKOSMTrVOZwYxavcizLQDfIEXzppVFglID4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/Mzc5OTM2MS9waG90/by9jaGlja2VuLXRo/aWdocy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RGZTWWxv/X21xVjhPVjBvdmpj/YlpRZzRrQmp6TUx6/NDQ1UUp6MllONVpm/dz0', category: 'Grocery' },
    { id: 18, name: 'Applesauce', description: '500g of applesauce', price:450, image: 'https://imgs.search.brave.com/hU93oiD6N4D7nDRnG91oocMnTX8jwyoaxbEK15qDYds/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9hcHBs/ZXNhdWNlLTE1OTcy/Njg3MDMuanBnP2Ny/b3A9MXh3OjAuNjI2/NzQwOTQ3MDc1MjA4/OXhoO2NlbnRlcix0/b3AmcmVzaXplPTEy/MDA6Kg', category: 'Grocery' },
    { id: 19, name: 'Cereal', description: '500g of breakfast cereal', price: 230, image: 'https://imgs.search.brave.com/n7qtA029FCw8UktqTvaAAn7vYpmU1DAKDNIwQbIccns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NTgxMjExL3Bob3Rv/L2dyYWluLWFuZC1j/ZXJlYWwtY29tcG9z/aXRpb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXJGTlFm/N0hySFFlX0x4dUZh/RXp5OG1JMW9xNVQy/cldDM0E5VkZUMWNJ/NEE9', category: 'Grocery' },
    { id: 20, name: 'Tomato Sauce', description: '500g of tomato sauce', price: 270, image: 'https://imgs.search.brave.com/pyHYl1Zaf0uJpfUb1X3s1k8xWKSArNZmRuZyY3Rl0U0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MDI1ODM4L3Bob3Rv/L3NwYWdoZXR0aS1z/YXVjZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RDZKY2Vr/Z2lrT2hfR2JMUFZB/ZHhmRjNEaFlsRS1E/YXdRNTJsd2lkdFBm/WT0', category: 'Grocery' },

    { id: 22, name: 'Coca Cola', description: '500g of coca cola', price: 55, image: 'https://imgs.search.brave.com/kKpal6jKc2EFyfSQlax8xSAOpi-kvzPfoeyrtYG9d1c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29jYS1jb2xhLmNv/bS9jb250ZW50L2Rh/bS9vbmV4cC91cy9l/bi9icmFuZHMvY29j/YS1jb2xhLW9yaWdp/bmFsL2VuX2NvY2Et/Y29sYS1vcmlnaW5h/bC10YXN0ZS0yMC1v/el83NTB4NzUwX3Yx/LmpwZw', category: 'Beverages' },
    { id: 23, name: 'Pepsi', description: '500g of Pepsi', price: 75, image: 'https://imgs.search.brave.com/lcX2JHrFSVkQdsWBtbJz8Wbxne8Fq4xDCA-zavMQ93w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wZXBz/aWJvdHRsaW5ndmVu/dHVyZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEx/L1BLRy0zOTI0MV8w/MDEyOV8xQDJ4LnBu/Zw' , category: 'Beverages' },

    { id: 24, name: 'Slice', description: '500g of Slice', price: 65, image: 'https://imgs.search.brave.com/hZFEFukiRsIiJwLhiAHFo2NPt0kExES4dT7Dgy8eL7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0MEJNTkxOZkwu/anBn', category: 'Beverages' },
    { id: 25, name: 'Maaza', description: '500g of Maaza', price: 55, image: 'https://imgs.search.brave.com/crsT9aUoVsxK7dNR3ZI19wEbm6z01rFzpCVe7edvwwo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE5eHFCOExIQUwu/anBn', category: 'Beverages' },
    { id: 26, name: 'Balaji Masala Masti', description: '100g', price: 10, image: 'https://imgs.search.brave.com/BCUqXlIi2k0DRPH_B2HT4MM8mwQfUfbM3cfiXqBPKIc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaGF5/b25hdWsuY29tL2Nk/bi9zaG9wL3Byb2R1/Y3RzL0JhbGFqaU1h/c2FsYU1hc3RpLmpw/Zz92PTE2NjMxNjY4/OTcmd2lkdGg9MTk0/Ng', category: 'Snacks' },
    { id: 27, name: 'Balaji Chaat Chaska', description: '100g', price: 15, image: 'https://imgs.search.brave.com/-zgMFxFXlxNBpM-lzC6VQXC3BAau6hQ3tVGx5M55x7A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFFVitmblo5Ukwu/anBn', category: 'Snacks' },
    { id: 28, name: 'Balaji Poprings', description: '100g', price: 10, image: 'https://imgs.search.brave.com/HH_9t5g7TMms8GuXLK2OqQqcl0yaw3OolkNl5TMKbLc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTExQTJhRUdOWEwu/anBn', category: 'Snacks' },
    { id: 29, name: 'Oreo', description: '200g ', price: 25, image: 'https://imgs.search.brave.com/3x0G437zByyFqYeDQTYm690RhILET-NcA-_cE8xmPA0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMLXhZWU5lZkwu/anBn', category: 'Snacks' },
    { id: 30, name: 'Bournbon', description: '200g', price: 20, image: 'https://imgs.search.brave.com/f0I1zRGiEKAVwkXwe92V2XAxLaR4ECnw4NQ_X7MWEY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NTY1OTE1Ny9waG90/by9ib3VyYm9uLWNy/ZWFtLWJpc2N1aXRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1BaUg4d3hzNlg2/WmItcWVaX2ZSNzRR/dEljdklkdWxwX09L/dG5rWV9qLVpRPQ', category: 'Snacks' },
    
    { id: 32, name: 'Surf Excel', description: '500g of Powder', price: 75, image: 'https://imgs.search.brave.com/lEmeDJIcqOiiQo7e1MV2JnOZl8yna3rKv6dntV9zddw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91bmls/ZXZlci1wcm9mZXNz/aW9uYWwuY29tL2Nk/bi9zaG9wL2ZpbGVz/L3N1cmYtZXhjZWwt/cHJvLTVrZy1tZWdh/LXBhY2stODQ2MjMw/XzM4NHgzODQucG5n/P3Y9MTcxNTYwMzIz/MA', category: 'Household Essentials' },
    { id: 33, name: 'Wheel', description: '500g of Soap', price: 45, image: 'https://imgs.search.brave.com/ZlP-B-bcAOle3nVPuzo3Haz8FuJsPn9jnfqaWeVgh-8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cXVpY2twYW50cnku/aW4vY2RuL3Nob3Av/cHJvZHVjdHMvd2hl/ZWwtYWN0aXZlLTIt/aW4tMS1kZXRlcmdl/bnQtc29hcC1xdWlj/ay1wYW50cnlfNzAw/eDcwMC5qcGc_dj0x/NzEwNTM4Njc3', category: 'Household Essentials' },
    { id: 34, name: 'Tide', description: '500g of Soap', price: 55, image: 'https://imgs.search.brave.com/TbmrhkCyiehn88tARNHYnXTty_MUAu9I-hECeLs_4K4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFCLVU5RTNHUkwu/anBn', category: 'Household Essentials' },
    { id: 35, name: 'Ghadi', description: '500g of Powder', price: 35, image: 'https://imgs.search.brave.com/3KngBmRTGPRffyV2Q4Z5dfyEwg7DcnVPYd8rrgwkiik/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cXVpY2twYW50cnku/aW4vY2RuL3Nob3Av/cHJvZHVjdHMvZ2hh/ZGktZGV0ZXJnZW50/LXBvd2Rlci1xdWlj/ay1wYW50cnktMV81/MDB4NTAwLmpwZz92/PTE3MTA1MzgwNzY', category: 'Household Essentials' },

    // { id: 36, name: 'Dettol', description: '500ml of hand sanitizer', price: 75, image: 'https://imgs.search.brave.com/cdVxolYcEpmhtGFZKv-LD2K9XfPaTNhM1p8VZrsdPqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MzQ5MDA4L3Bob3Rv/L2RldHRvbC1oYW5k/LXNhbml0aXplci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/YlV1WnpwZ21FNVk1/UjBvN0k3cmxWTzU1/S1cxSkRzQzVn', category: 'Household Essentials' },
    // { id: 37, name: 'Harpic', description: '500ml of toilet cleaner', price: 85, image: 'https://imgs.search.brave.com/aS5H2ph3x2M5MJZqHflT8FPItF2vK2-csLBkC_kPb6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MzQ5MTA5L3Bob3Rv/L2hhcnBpYy10b2ls/ZXRjbGVhbmVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1V/T0N6cHdzb0ttQ0c1/YlRNdFRrNVZP', category: 'Household Essentials' },
    // { id: 38, name: 'Mr. Muscle', description: '500ml of multi-surface cleaner', price: 70, image: 'https://imgs.search.brave.com/aA3OrDNDPHZ9jWTgY3g8aFb5PxljBdkh0KN7oVyz2Xc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MzQ5MTA0L3Bob3Rv/L21yLW11c2NsZS1s/YWJlbC1zY2llbnRp/YmxlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pQnZQZlY0/VDFVd2ltQ0FhOQ', category: 'Household Essentials' },
    // { id: 39, name: 'Comfort', description: '1 liter of fabric softener', price: 80, image: 'https://imgs.search.brave.com/6dHnAbyCmztPcs4xJ2sMWC8tTwzt5m0x2NQ4eMyWvUo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MzQ5MDA2L3Bob3Rv/L2NvbmZvcnQtZmFicmlj/LXNvZnRlbmVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1i/OXFWSlZuNFpNMzUv/QzVYV2dWQUxZPQ', category: 'Household Essentials' },
    // { id: 40, name: 'Vim', description: '500g of dishwashing powder', price: 65, image: 'https://imgs.search.brave.com/M7_9GVkTsP6cw2FvSSwhl6omxXv2chGnX6mQFYddTYU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MzQ5MTAxL3Bob3Rv/L3ZpbS1kaXNoYXNo/aW5nLXBvd2Rlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SHdFQjFuVThvWkZQ/M1hQZlByRVdQb0V2', category: 'Household Essentials' }
];


const ProductGrid = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');


    
    

    // Categories for filtering
    const initialCategories = ['All', 'Grocery', 'Beverages', 'Snacks', 'Household Essentials'];





const [categories, setCategories] = useState(initialCategories);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Call getCategories to fetch category data
        const fetchedCategories = await getCategories();
        
        // Merge initial categories with fetched categories
        const combinedCategories = [...initialCategories, ...fetchedCategories];
        
        // Update state with combined categories
        setCategories(combinedCategories);
      } catch (err) {
        // Handle errors by updating state
        setError(err.message || 'Failed to fetch categories');
      } finally {
        // Set loading to false once data fetching is complete
        setLoading(false);
      }
    };

    // Invoke the fetchCategories function
    fetchCategories();
  }, []);


  
    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Handle search query change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter products based on category and search query
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
        
    });

    

    // Render individual product cards
    const renderProductCard = (product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-lg" style={{ backgroundColor: '#f7e9dd', borderRadius: '15px' }}>
                <img src={product.image} className="card-img-top" alt={product.name} style={{ borderRadius: '15px 15px 0 0' }} />
                <div className="card-body">
                    <h5 className="card-title text-primary">{product.name}</h5>
                    <p className="card-text text-dark">{product.description}</p>
                    <p className="card-text text-danger">Price: Rs.{product.price.toFixed(2)}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <button 
                            className="btn-size" 
                            onClick={() => handleAddToCart(product.id)}
                        >
                            Add to Cart
                        </button>
                        
                     
                        {cart[product.id] && (
                            <div className="input-group">
                                <button 
                                    className="btn btn-secondary" 
                                    onClick={() => handleRemoveFromCart(product.id)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{cart[product.id]}</span>
                                <button 
                                    className="btn btn-secondary" 
                                    onClick={() => handleAddToCart(product.id)}
                                >
                                    +
                                </button>
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ background: 'linear-gradient(to right, #ffecd2, #fcb69f)', minHeight: '100vh', paddingBottom: '20px' }}>
            {/* Search and Category Filter */}
            <div className="container mt-4">
                <div className="row mb-4">
                    {/* Search Bar */}
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            style={{ backgroundColor: '#ffe4b5', borderColor: '#ff6347' }}
                            placeholder="Search for products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    {/* Category Filter */}
                    <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-center">
                            {initialCategories.map(category => (
                                <button
                                    key={category}
                                    className={`btn btn-outline-primary mx-2 ${selectedCategory === category ? 'active' : ''}`}
                                    style={{ backgroundColor: selectedCategory === category ? '#ff6347' : '', color: selectedCategory === category ? '#fff' : '' }}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                {<div className="row">
                    {filteredProducts.map(product => renderProductCard(product))}
                </div> }
            </div>
            
            {/* For adding category */}
            {/* <div className="container">
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}

            {/* Footer */}
            <footer className="text-white text-center py-4" style={{ backgroundColor: '#ff6347', marginTop: 'auto' }}>
    <div className="container">
        <div className="row">
           
            <div className="col-md-4">
                <p className="mb-1">© Sunbeam.Student.D5 2024 | All Rights Reserved</p>
                <p className="mb-1">Contact us at: support@student.sunbeam.com</p>
                <p className="mb-1">Visit our office:</p>
                <p className="mb-1">123 Sunbeam Road, Pune, India</p>
                <p className="mb-1">Open Hours: Mon-Fri 9am-5pm</p>
            </div>

           
            <div className="col-md-4">
                <p className="mb-1">Website Design by:</p>
                <p className="mb-1">Ashish Kottur</p>
                <p className="mb-1">Vishal Purkar</p>
                <p className="mb-1">Shreyas Mandlik</p>
                <p className="mb-1">Aditya Mane</p>
            </div>

            
            <div className="col-md-4">
                <p className="mb-1">Follow us on:</p>
                <div className="d-flex justify-content-center mb-3">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>

                
            </div>
        </div>
    </div>
</footer>


        </div>
    );
};

export default ProductGrid;




