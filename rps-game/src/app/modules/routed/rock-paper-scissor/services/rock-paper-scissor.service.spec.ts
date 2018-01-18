import { RockPaperScissorTurn } from './../entities/rock-paper-scissor-turn';
import { DRAW, PLAYER_2_WINS, PLAYER_1_WINS } from './../constants/rock-player-scissor-turn.constants';
import { RockPaperScissorService } from './rock-paper-scissor.service';
import { RockPaperScissor } from '../entities/rock-paper-scissor';

describe('Rock paper scissor service test', () => {

    describe('Check turn result test', () => {

        const service = new RockPaperScissorService();


        const testCases = [
            {
                player1: RockPaperScissor.Paper,
                player2: RockPaperScissor.Paper,
                result: DRAW
            },
            {
                player1: RockPaperScissor.Rock,
                player2: RockPaperScissor.Rock,
                result: DRAW
            },
            {
                player1: RockPaperScissor.Scissor,
                player2: RockPaperScissor.Scissor,
                result: DRAW
            },
            {
                player1: RockPaperScissor.Paper,
                player2: RockPaperScissor.Rock,
                result: PLAYER_1_WINS
            },
            {
                player1: RockPaperScissor.Paper,
                player2: RockPaperScissor.Scissor,
                result: PLAYER_2_WINS
            },
            {
                player1: RockPaperScissor.Rock,
                player2: RockPaperScissor.Paper,
                result: PLAYER_2_WINS
            },
            {
                player1: RockPaperScissor.Rock,
                player2: RockPaperScissor.Scissor,
                result: PLAYER_1_WINS
            },
            {
                player1: RockPaperScissor.Paper,
                player2: RockPaperScissor.Rock,
                result: PLAYER_1_WINS
            },
            {
                player1: RockPaperScissor.Paper,
                player2: RockPaperScissor.Scissor,
                result: PLAYER_2_WINS
            },

        ];

        testCases.forEach((testCase) => {
            it('should display correctly which player has won the turn', () => {

                expect(service.checkTurnResult(
                    new RockPaperScissorTurn({
                        player1: testCase.player1,
                        player2: testCase.player2
                    }))
                ).toBe(testCase.result);
            });
        });
    });
});
