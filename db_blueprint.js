// ! user profile
/*
userID 9999 ->  username    : string
                about       : string
                ProfileImg  : image path
                mobile No   : Mo. no
                
                contact list : [user1 ID,  user2 ID,  user3 ID,  user4 ID,  user5 ID,   user6 ID]

                chatData ->  refereed to the "CHATTING TABLE"

                status -> refereed to the "STATUS TABLE"


*/







// ! CHATTING TABLE
/*

ram_and_shyam     ->    {
                            userId       : 4444 ram ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 9999 shyam ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 9999 shyam ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 9999 shyam ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 4444 ram ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }


sonu_and_monu     ->    {
                            userId       : 1111 sonu ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 1111 sonu ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 2222 monu ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 2222 monu ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }

                        {
                            userId       : 2222 monu ID
                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                            data          : File path | String
                            timestamp     : current data
                            delete status : Alive     | delete for me | delete for every one
                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                        }


*/



//===============
//===============
//===============
//===============
//===============
//===============
//===============
//===============


// ! STATUS TABLE
/*

user ID  1111   ->  {
                        status type     : Video  |  String + emoji  |  Image
                        data            : video path   | Image path
                        timestamp       : data
                        status state    : sending 🕑 |  sent ✅
                        users view list :   {
                                                userID        :11111,
                                                watchTime     : date
                                            }
                                            
                                            {
                                                userID        :5555,
                                                watchTime     : date
                                            }
                                            
                                            {
                                                userID        :9999,
                                                watchTime     : date
                                            }
                                            
                                            {
                                                userID        :2222,
                                                watchTime     : date
                                            }

                    }


user ID  9999   ->  {
                        status type     : Video  |  String + emoji  |  Image
                        data            : video path   | Image path
                        timestamp       : data
                        status state    : sending 🕑 |  sent ✅
                        users view list :   {
                                                userID        :11111,
                                                watchTime     : date
                                            }

                                            {
                                                userID        :5555,
                                                watchTime     : date
                                            }

                    }


user ID  9999   ->  {
                        status type     : Video  |  String + emoji  |  Image
                        data            : video path   | Image path
                        timestamp       : data
                        status state    : sending 🕑 |  sent ✅
                        users view list :   {
                                                userID        :11111,
                                                watchTime     : date
                                            }

                                            {
                                                userID        :5555,
                                                watchTime     : date
                                            }

                                            {
                                                userID        :6666,
                                                watchTime     : date
                                            }

                                            {
                                                userID        :2222,
                                                watchTime     : date
                                            }

                                            {
                                                userID        :8080,
                                                watchTime     : date
                                            }

                                            {
                                                userID        :2020,
                                                watchTime     : date
                                            }

                    }
*/





//===============
//===============
//===============
//===============
//===============
//===============
//===============
//===============





// ! GROUP TABLE
/*
groupId 101010 ->   {
                        Group Name  : string
                        Group About : string
                        ProfileImg  : image path
                        usersList   : [user1 ID,  user2 ID,  user3 ID,  user4 ID,  user5 ID,   user6 ID]
                        chatData    :  {
                                            userId       : 4444 ram ID
                                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                                            data          : File path | String
                                            timestamp     : current data
                                            delete status : Alive     | delete for me | delete for every one
                                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                                        }

                                        {
                                            userId       : 9999 shyam ID
                                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                                            data          : File path | String
                                            timestamp     : current data
                                            delete status : Alive     | delete for me | delete for every one
                                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                                        }

                                        {
                                            userId       : 9999 shyam ID
                                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                                            data          : File path | String
                                            timestamp     : current data
                                            delete status : Alive     | delete for me | delete for every one
                                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                                        }

                                        {
                                            userId       : 9999 shyam ID
                                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                                            data          : File path | String
                                            timestamp     : current data
                                            delete status : Alive     | delete for me | delete for every one
                                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                                        }

                                        {
                                            userId       : 4444 ram ID
                                            msgType       : String    | Voice | Video | Emoji | Photo | document | contentNo,
                                            data          : File path | String
                                            timestamp     : current data
                                            delete status : Alive     | delete for me | delete for every one
                                            msg status    : sending 🕑 |  sent ✅ | delivered ✅✅ | read ✔✔
                                        }
                    }
*/



//===============
//===============
//===============
//===============
//===============
//===============
//===============
//===============



// ! GROUP CHATTING DATA
/*

*/