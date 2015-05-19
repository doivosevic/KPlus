
import Control.Monad
import Control.Applicative hiding ((<|>),many)
import Text.ParserCombinators.Parsec
import Text.ParserCombinators.Parsec.Expr
import Text.ParserCombinators.Parsec.Language
import qualified Text.ParserCombinators.Parsec.Token as Token

import Data.Char
import Data.Functor.Identity(Identity)

languageDef =
    emptyDef { Token.commentStart       = "/*"
             , Token.commentEnd         = "*/"
             , Token.commentLine        = "//"
             , Token.identStart         = alphaNum
             , Token.identLetter        = alphaNum
             , Token.reservedNames      = [ ]
             , Token.reservedOpNames    = [ ":" ]
            }

lexer = Token.makeTokenParser languageDef

identifier      = Token.identifier  lexer

braces          = Token.braces        lexer
stringLiteral   = Token.stringLiteral lexer
commaSep        = Token.commaSep      lexer
reservedOp      = Token.reservedOp    lexer
float           = Token.float         lexer

data Obj = Obj [Elem] deriving (Show)
data Elem = Elem String Val deriving (Show)
data Val = VStri String
         | VObj Obj
         | VArr [Val]
         deriving (Show)

objParser :: Parser Obj
objParser = Obj <$> braces (commaSep elemParser)

elemParser :: Parser Elem
elemParser = Elem <$> stringLiteral <*> (reservedOp ":" *> valParser)

valParser :: Parser Val
valParser = vstriParser <|> vobjParser <|> varrParser

vstriParser :: Parser Val
vstriParser = VStri <$> (stringLiteral <|> identifier)

vobjParser :: Parser Val
vobjParser = VObj <$> objParser

varrParser :: Parser Val
varrParser = VArr <$> commaSep valParser

easyFile = readFile "kplus_easy.dump"
hardFile = readFile "kplus_27022015.dump"
latestFile = readFile "req_latest.dump"

easyTest = easyFile >>= return . (parse objParser "")
hardTest = hardFile >>= return . (parse objParser "")
latestTest = latestFile >>= return . (parse objParser "")

{-

obj
  name : obj
          name : val
  name : val 
  name : val

{
  "_page": {
    "current": 1,
    "items_per_page": 1300,
    "page_count": 1,
    "item_count": 1238
  }
}

-}